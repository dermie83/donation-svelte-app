import { redirect } from "@sveltejs/kit";

export const actions = {
  login: async ({ request }) => {
    const form = await request.formData();
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    if (email === "" || password === "") {
      throw redirect(307, "/");
    } else {
      console.log(`attemting to log in email: ${email} with password: ${password}`);
    }
  }
};