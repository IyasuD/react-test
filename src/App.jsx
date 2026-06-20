import "./App.css";
import CourseCard from "./components/CourseCard";
import Header from "./components/Header";
// import { Button } from "@base-ui/react";
import { Button } from "./components/ui/button";
function App() {
  return (
    <>
      <Header />
      <Button />
      <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl">
        Learn Web Developemnt with liyutech.org
      </h1>
      <p>Seek wisdom, Elevate your intellect and serve humanity.</p>
      <div className="flex gap-4">
        <CourseCard
          title="Fundamentals of React"
          buttonText="Learn More"
          imageurl="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CourseCard
          title="Fundamentals of Python"
          buttonText="Register"
          imageurl="https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CourseCard
          title="Introduction to GenAI"
          buttonText="Learn More"
          imageurl="https://plus.unsplash.com/premium_photo-1726556396539-e007e82f1240?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </>
  );
}

export default App;
