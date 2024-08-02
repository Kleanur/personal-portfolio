
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

export const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance]);
}

export const useRotation = (value: MotionValue<number>, degrees: number) => {
    return useTransform(value, [0, 0.4], [-degrees, 0]);
}


