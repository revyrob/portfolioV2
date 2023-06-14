//import hashlink to connect to different parts of the page for the projects
export default function ProjectSelector({ styling }) {
  const userLanguageChange  = ["Projects", "project2", "project3", "project4"];

  // set selected language by calling context method
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);

  return (
    <>
    
    <select
      onChange={handleLanguageChange}
      value={userLanguageChange.indexOf()}
      className={styling}
      
    >
      {Object.entries(userLanguageChange).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
   

    </>
  );
}
