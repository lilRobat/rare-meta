import React, { useEffect } from "react";
import axios from "axios";

const Content = () => {
  useEffect(() => {
    await axios.get('/api/collections');
  })
  return (
    <div>

    </div>
  )
}
export default Content;