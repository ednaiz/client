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
      let nav = useNavigate();

     const send = (data) = 
    console.log(data)
    dispatch(login(data))
      <h1>כניסה</h1>
            <form onSubmit={handleSubmit(send)}>
                <Input
                    type="text"
                    
                    label={"שם משתמש או מייל"}
                    errors={errors}
                    name="UserName" />
                <Input
                    type="password"
                    register={register}
                    label={"סיסמה"}
                    errors={errors}
                    name="Password" />
                <input type="submit" value="כניסה" />
            </form>
        </>
    )
}


 


export default MyStudentPropil;
