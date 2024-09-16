import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<div>Hi</div>} />
        <Route path="/new" element={<div>new</div>} />
        <Route path="/:id">
          <Route index element={<div>show</div>} />
          <Route path="edit" element={<div>edit</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
