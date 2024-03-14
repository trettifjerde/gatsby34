import * as React from "react"
import { PageProps, navigate } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    navigate('/');
  }, []);
  return null;
}

export default NotFoundPage;
