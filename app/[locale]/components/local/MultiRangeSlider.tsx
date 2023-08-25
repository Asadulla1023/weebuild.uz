"use client"
import React, { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import styles from "@/styles/multiRangeSlider.module.css";

interface IRange {
    min: number
    max: number
    onChange: Function
}

const MultiRangeSlider = ({ min, max, onChange }: IRange) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const range = useRef(null);
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            //@ts-ignore
            const maxPercent = getPercent(+maxValRef.current.value);
            if (range.current) {
                //@ts-ignore
                range.current.style.left = `${minPercent}%`;
                //@ts-ignore
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);
    useEffect(() => {
        if (minValRef.current) {
            //@ts-ignore
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);
            if (range.current) {
                const percent = maxPercent - minPercent
                //@ts-ignore
                range.current.style.width = percent < 50 ? `${percent + 1}%` :  `${percent}%`
            }
        }
    }, [maxVal, getPercent]);
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return (
        <div className={styles.container}>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={(event) => {
                    const value = Math.min(+event.target.value, maxVal - 1);
                    setMinVal(value);
                    event.target.value = value.toString();
                }}
                className={`${styles.thumb} ${styles.thumbZindex3} ${styles.thumbZindex5}`}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                onChange={(event) => {
                    const value = Math.max(+event.target.value, minVal + 1);
                    setMaxVal(value);
                    event.target.value = value.toString();
                }}
                className={`${styles.thumb} ${styles.thumbZindex4}`}
            />

            <div className={styles.slider}>
                <div className={styles.sliderTrack} />
                <div ref={range} className={styles.sliderRange} />
            </div>
        </div>
    );
};

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;
