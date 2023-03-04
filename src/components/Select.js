//right details
import { react } from "react";
import Index from "./Index";

function Select(props) {
    const loaded = () => {
        const [ post, setPost ] = useState (null);
        return (
            <div>{post}</div>
        )
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return props.posts ? loaded() : loading();
}

export default Select