import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
const { useEffect, useState } = require("react");

export default function Detail() {
    const params = useParams();
    const [mascota, setMascotas] = useState([]);
    useEffect(() => {
        const URL =
            "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setMascotas(data.find(mascota => mascota.id == params.mascotaId));
            });
    }, []);

    return (
        <div class="d-flex justify-content-center">
            <h1>{mascota.nombre}</h1>
            <div>

                <Card style={{ width: "16rem", height: "24rem" }} className="mb-3">
                    <Card.Img
                        style={{ height: "14rem" }}
                        variant="center"
                        src={mascota.foto}
                        alt={mascota.descripcion}
                    />
                    <Card.Body>
                        <Card.Text>{mascota.raza}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}