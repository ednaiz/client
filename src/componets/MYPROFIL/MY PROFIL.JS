const MyStusentProfil=(props) => {
   
return (
  <>
      <h1>הפרופיל שלי</h1>
      <form>
          <h1>תמונה</h1>
          {/* יראה את הנתונים השמורים של המשתמש */}
          <input type="text" name="name" />   <label >שם משתמש</label><br /><br />
          <input type="mail" name="email" placeolder="מייל" /> <label >מייל</label><br /><br />
          <input type="number" name="phoneNumber" placeolder="טלפון" /> <label>טלפון</label><br /><br />
          <input type="button" value="עריכת פרופיל" />
          {/* נשלח לפוקציית עדכון של כל הפרטים */}

      </form>



  </>
)
}
export default MyStudentPropil;
