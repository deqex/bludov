import { useState, useEffect, useRef } from "react"

export default function Home() {


    const [firstBox, setFirstBox] = useState(false);
    const [secondBox, setSecondBox] = useState(false);
    const [thirdBox, setThirdBox] = useState(false);
    const heading = useRef();

    const handleCheckbox = (e) => {



        switch (e.target.name) {
            case "Tomas":
                setFirstBox(!firstBox);
                break;
            case "Franta":
                setSecondBox(!secondBox);
                break;
            case "Pepa":
                setThirdBox(!thirdBox);
                break;

        }

    }



    useEffect(() => {
        document.title = "page loded"
        heading.current.style.color = "red"

    }, []);

    useEffect(() => {
        heading.current.style.color = "blue"
    }, [firstBox])

    useEffect(() => {
        heading.current.style.color = "orange"
    }, [secondBox])

    useEffect(() => {
        heading.current.style.color = "green"
    }, [thirdBox])

    return (
        <>
            <h1 ref={heading}>home</h1>

            <input type="checkbox" name="Tomas" onChange={handleCheckbox} />
            <input type="checkbox" name="Franta" onChange={handleCheckbox} />
            <input type="checkbox" name="Pepa" onChange={handleCheckbox} />

            <p>Tomas: {firstBox + ""}</p>
            <p>Franta: {secondBox + ""}</p>
            <p>Pepa : {thirdBox + ""}</p>


        </>
    )
}