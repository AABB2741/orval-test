import { getUser, useLogin } from "./api/generated/auth/auth";
import { upload } from "./api/generated/post/post";


const mutation = useLogin();
mutation.mutateAsync({
  data: {
    email: "johndoe@acme.inc",
    password: "password"
  }
})

const data = await getUser();

if (data.status === 200) {
  console.log(data.data.name);
}

await upload({
  file: new File([], "file.txt", { type: "text/plain" }),
  title: "My file"
});
