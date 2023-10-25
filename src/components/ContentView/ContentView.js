import ContentCard from '../ContentCard/ContentCard';
import { useParams } from "react-router-dom";
import { content } from '../../sampledata';

function ContentView({ title, url, username, created_at, content = '', content_type }) {
    
  const { id } = useParams();

    return (
        <>
            <h1>Content View { id }</h1>
            {/* <ContentCard title={title} url={url} username={username} created_at={created_at} content={content} content_type={content_type}/> */}
        </>
    );
}

export default ContentView;