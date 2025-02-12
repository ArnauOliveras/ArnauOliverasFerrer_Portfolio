import React, { useEffect, useRef, useState } from "react";
import "../../styles/index.css";

export const WebTransition = () => {
    const [obstacles, setObstacles] = useState([]);

    useEffect(() => {
        const spawnObstacle = () => {
            setObstacles((prevobstacles) => [
                ...prevobstacles,
                {
                    id: Date.now(),
                    positionX: generateRandom(0, window.innerWidth),
                    positionY: -50,
                    velocity: 1.5,
                    tag: "<h1/>",
                    size: generateRandom(25, 50) + "px",
                    borderRadius: "2000px",
                },
            ]);

            const randomInterval = generateRandom(1500, 2000);

            setTimeout(spawnObstacle, randomInterval);
        };

        spawnObstacle();

        return () => {
            setObstacles([]);
        };
    }, []);


    useEffect(() => {
        const moveInterval = setInterval(() => {
            setObstacles((prevObstacles) =>
                prevObstacles
                    .map((obstacle) => jump(obstacle)) // Actualizamos los obstáculos
                    .filter((obstacle) => obstacle.positionY > -2000) // Filtramos obstáculos fuera del rango
            );
        }, 20);

        return () => clearInterval(moveInterval);
    }, []);

    const jump = (obstacle) => {
        let { positionY, velocity } = obstacle;

        // Aplicamos la física del salto
        const gravity = 0.01;

        positionY += velocity;
        velocity -= gravity;


        // Retornamos un nuevo objeto para mantener la inmutabilidad
        return { ...obstacle, positionY, velocity };
    };

    const generateRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


    return (
        <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
            <div className="border-bottom border-3 border-warning" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", zIndex: 1, }}></div>

            {obstacles.map((obstacle) => (
                <div key={obstacle.id} className=" border border-3 border-warning bg-fullstackprojects shadow" style={{ position: "absolute", bottom: `${obstacle.positionY}px`, left: `${obstacle.positionX}px`, width: `${obstacle.size}`, height: `${obstacle.size}`, borderRadius: `${obstacle.borderRadius}`, zIndex: 3, }}>

                </div>
            ))}
        </div>
    );
};
