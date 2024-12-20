import { useRef, useState } from "react";
import C from "./_datepicker.module.css";
import { Calendar } from "./calendar";

type DatepickerProps = {};

export function Datepicker(props: DatepickerProps) {
    const [isShow, setIsShow] = useState(false);
    const calenderRef = useRef<HTMLDivElement>(null);

    const closeDatepicker = (e: MouseEvent) => {
        if (isShow && !calenderRef.current?.contains(e.target as Node)) {
            setIsShow(false);
        }
    };
    return (
        <div
            className={C.datepicker__wrapper}
            onClick={(e: any) => closeDatepicker(e)}
        >
            <div
                className={C.datepicker__input}
                data-testid="datepicker-input"
                onClick={() => setIsShow(!isShow)}
            ></div>
            <div className={C.datepicker} ref={calenderRef}>
                <Calendar isShow={isShow} />
            </div>
        </div>
    );
}
