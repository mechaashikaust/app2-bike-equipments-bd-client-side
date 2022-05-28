import { useEffect, useState } from "react";

const useTotalitems = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-sea-84552.herokuapp.com/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return [users, setUsers];
}

export default useTotalitems;