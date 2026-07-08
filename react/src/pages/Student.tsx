import { useParams, useSearchParams } from "react-router-dom";

const Student = () => {
  const params = useParams();

  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const name = searchParams.get("name");

  return (
    <>
      <h1>Student id: {id}</h1>
      <h2>Student name: {name}</h2>
    </>
  );


//   return (
//     <>
//       <h1>Student {params.id}</h1>
//     </>
//   );
};

export default Student;
