import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - GameMaster`;
    }, [title])
}

export default useTitle