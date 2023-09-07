import Input from "@/components/layouts/atoms/Input";
import SubmitButton from "@/components/layouts/atoms/SubmitButton";

const LoginForm = () => {
  return (
      <div className="text-center">
        <h1 className="text-3xl mb-5">ログイン</h1>
        <Input id="name" name="name">名前</Input>   
        <Input id="email" name="email">メールアドレス</Input> 
        <SubmitButton>ログイン</SubmitButton>  
      </div>
        );
}
export default LoginForm;



