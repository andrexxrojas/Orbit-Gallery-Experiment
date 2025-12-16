import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import gsap from "gsap";

const initialImages = [
    "https://picsum.photos/200?1",
    "https://picsum.photos/200?2",
    "https://picsum.photos/200?3",
    "https://picsum.photos/200?4",
    "https://picsum.photos/200?5",
    "https://picsum.photos/200?6",
];

export default function OrbitGallery() {
    const [images, setImages] = useState(initialImages);
    const itemsRef = useRef([]);
    const timeRef = useRef(0);

    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, images.length);

        itemsRef.current.forEach((el, i) => {
            if (!el) return;

            if (i === 0) {
                // first image → just above newest
                el.style.zIndex = images.length.toString();
            } else if (i === images.length - 1) {
                // newest image → bottom
                el.style.zIndex = "0";
            } else {
                // all other images → in between
                el.style.zIndex = (images.length - 1 - i).toString();
            }
        });


        const radius = 180;
        const speed = 0.01;

        const anim = gsap.ticker.add(() => {
            timeRef.current += speed;
            const count = images.length;

            itemsRef.current.forEach((el, i) => {
                if (!el) return;

                const angle = (i / count) * Math.PI * 2 + timeRef.current;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                gsap.set(el, {
                    x,
                    y
                });
            });
        });

        return () => {
            gsap.ticker.remove(anim);
        };
    }, [images]);

    const removeImage = () => setImages((prev) => prev.slice(0, -1));
    const addImage = () =>
        setImages((prev) => [...prev, `https://picsum.photos/200?${Math.random()}`]);

    return (
        <div className={styles["gallery-container"]}>
            <div className={styles["orbit-wrapper"]}>
                {images.map((src, i) => (
                    <img
                        key={src}
                        src={src}
                        ref={(el) => (itemsRef.current[i] = el)}
                        className={styles["orbit-item"]}
                    />
                ))}
            </div>

            <div className={styles["buttons-container"]}>
                <button
                    onClick={removeImage}
                    className={styles["btn"]}
                >
                    Remove
                </button>
                <button
                    onClick={addImage}
                    className={styles["btn"]}
                >
                    Add
                </button>
            </div>
        </div>
    );
}