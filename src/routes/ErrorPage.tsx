import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    let errorCode = useRouteError();
    return (
        <div>
            sorry bruv, this page wa'n't found, error numba {errorCode.status}{" "}
        </div>
    );
}
