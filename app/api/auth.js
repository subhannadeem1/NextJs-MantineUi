import supabase from "@/utils/supabase/supabaseClient";

//signup
  export const signupUser = async  (firstName, lastName, email, password, dateOfBirth, occupation, bio, gender) =>{
    console.log("values ======> ",firstName) 
    
    const { data, error } = await supabase
      .from('signup-users')
      .insert([
        {
          firstName,
          lastName,
          email,
          password,
          dateOfBirth,
          occupation,
          bio,
          gender,
        },
      ])
      .select();
      if (error) {
        return error
      }else{
        return data
      }
    }
    export const checkEmailExists = async (email) => {
        const { data, error } = await supabase
          .from('signup-users')
          .select('email')
          .eq('email', email);
      
        if (error) {
          console.error('Error checking email:', error);
          return { error: 'Error checking email' };
        }
      
        return { exists: data.length > 0 };
      };
//login

export const loginUser = async (email, password) => {
    try {
      const { data: users, error } = await supabase
        .from('signup-users')
        .select('*')
        .eq('email', email);
  
      if (error) {
        console.error('Error fetching user data:', error.message);
        return { error: 'Error fetching user data' };
      }
  
      if (users.length === 0) {
        return { error: 'User does not exist' };
      }
  
      const user = users[0];
  
      // Check if password matches (ensure that passwords are hashed in a real app)
      if (user.password !== password) {
        return { error: 'Invalid email or password' };
      }
  
      // Successful login
      return { userId: user.id };
    } catch (error) {
      console.error('Unexpected error:', error.message);
      return { error: 'An unexpected error occurred' };
    }
  };