import Input from "@/components/layouts/atoms/Input";
import SubmitButton from "@/components/layouts/atoms/SubmitButton";

const SignupForm = () => {
  return (
      <div className="text-center">
        <h1 className="text-3xl mb-5">サインアップ</h1>
        <Input id="name" name="name">名前</Input>   
        <Input id="email" name="email">メールアドレス</Input> 
        <Input id="password" name="password">パスワード</Input> 
        <Input id="password_confirm" name="password_confirm">確認パスワード</Input> 
        <SubmitButton>登録</SubmitButton>  
      </div>
        );
}
export default SignupForm;



