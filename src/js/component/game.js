import React, { useEffect, useRef, useState } from "react";
import "../../styles/index.css";

export const Game = () => {
    const [isJumping, setIsJumping] = useState(false);
    const codeRef = useRef(null);
    const [obstacles, setObstacles] = useState([]);

    const jump = () => {

        if (!isJumping) {
            setIsJumping(true);
            let velocity = 10;
            const gravity = 0.5;
            let position = 0;

            const jumpInterval = setInterval(() => {
                position += velocity;
                velocity -= gravity;

                if (position <= 0) {
                    position = 0;
                    clearInterval(jumpInterval);
                    setIsJumping(false);

                }

                codeRef.current.style.bottom = `${position}px`;
            }, 20);
        }
    };

    useEffect(() => {
        const spawnObstacle = () => {
            setObstacles((prevobstacles) => [
                ...prevobstacles,
                {
                    id: Date.now(),
                    position: window.innerWidth,
                    tag: "<h1/>",
                    width: generateRandom(30, 60) + "px",
                    height: generateRandom(30, 60) + "px",
                    borderRadius: generateRandom(1, 20) + "px",
                },
            ]);

            const randomInterval = generateRandom(1000, 2000);

            setTimeout(spawnObstacle, randomInterval);
        };

        spawnObstacle();

        return () => {
            setObstacles([]);
        };
    }, []);



    useEffect(() => {
        const moveInterval = setInterval(() => {
            setObstacles((prevobstacles) =>
                prevobstacles
                    .map((obstacle) => ({ ...obstacle, position: obstacle.position - 5 }))
                    .filter((obstacle) => obstacle.position > -50)
            );
        }, 20);

        return () => clearInterval(moveInterval);
    }, []);


    const generateRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;



    useEffect(() => {
        const checkProximity = setInterval(() => {
            obstacles.forEach((obstacle) => {
                if (obstacle.position <= 320 && obstacle.position >= 200) {
                    jump();
                }
            });
        }, 20);

        return () => clearInterval(checkProximity);
    }, [obstacles, isJumping]);

    return (
        <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
            <div className="border-bottom border-3 border-warning" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", zIndex: 1, }}></div>
            <i className="fa-solid fa-code text-warning fs-3" ref={codeRef} style={{ position: "absolute", bottom: "0", left: "200px", }}></i>

            {obstacles.map((obstacle) => (
                <div key={obstacle.id} className="border-bottom-0 border border-3 border-warning bg-videogamesprojects shadow" style={{ position: "absolute", bottom: "-3px", left: `${obstacle.position}px`, width: `${obstacle.width}`, height: `${obstacle.height}`, borderRadius: `${obstacle.borderRadius} ${obstacle.borderRadius} 0 0`, zIndex: 3, }}>

                </div>
            ))}
        </div>
    );
};
