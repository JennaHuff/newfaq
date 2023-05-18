import { useRouteError } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";

export default function ErrorPage() {
    let errorCode = useRouteError();
    return (
        <div>
            <MainLayout />
            <p>
                The answers you requested could not be fetched, this is most
                likely due to a network error :l
                {errorCode.status}
            </p>
        </div>
    );
}
