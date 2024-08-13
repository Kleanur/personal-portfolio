
import {
    useTransform,
    MotionValue,
    Variants
} from "framer-motion";

export const popInVariants: Variants = {
    hidden: { 
        scale: .8, 
        opacity: 0,
    },
    visible: { 
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            delay: .4,
        },
    }
}

export const slideUpVariants: Variants = {
    hidden: { 
        y: 300,
    },
    visible: { 
        y: 0,
        transition: {
            type: "tween",
            ease: "circOut"
        }
    }
}

export const waveVariants: Variants = {
    loadIn: {
        rotate: [0, 15, 0],
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            times: [0, 0.25, 0.5],
            repeat: 1,
            delay: 1
        },
    },
    wave: { 
        rotate: [0, 15, 0],
        scale: 1.03,
        transition: {
            rotate: {
                duration: 0.5,
                ease: "easeInOut",
                times: [0, 0.25, 0.5],
                repeat: 1,
                delay: 0.2,
            },
            scale: {
                type: "spring",
            },
        },
    }
}

export const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance]);
}

export const useRotation = (value: MotionValue<number>, degrees: number) => {
    return useTransform(value, [0, 0.6], [-degrees, 0]);
}


