import supabase from "@/utils/supabase/supabaseClient";

export const fetchUserData = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("signup-users")
      .select("*")
      .eq("id", userId);

    if (error) {
      throw new Error(error.message);
    }

    return data ? data[0] : null;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const updateUserData = async (userId, updatedData) => {
    try {
      const { error } = await supabase
        .from("signup-users")
        .update(updatedData)
        .eq("id", userId);
  
      if (error) {
        throw new Error(error.message);
      }
  
      return true;
    } catch (error) {
      console.error("Error updating user data:", error);
      return false;
    }
  };
//

 
export const getAllUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('signup-users')
        .select('firstName, lastName, email, dateOfBirth, occupation, gender');
  
      if (error) {
        console.error('Error fetching users:', error);
        return { error: 'Error fetching users' };
      }
  
      return data;
    } catch (error) {
      console.error('Unexpected error:', error);
      return { error: 'An unexpected error occurred' };
    }
  };

  
  export const getAllUsersDelete = async () => {
    const { data, error } = await supabase.from('signup-users').select('*');
    if (error) return { error };
    return data;
  };
  
  export const deleteUser = async (userId) => {
    const { data, error } = await supabase
      .from('signup-users')
      .delete()
      .eq('id', userId);
  
    return { data, error }; // Ensure object with `data` and `error` is returned
  };