'use client';
export default function LoginPage() {
  return (
    <div>
      <form>
        <label>ID :</label>
        <input type="text" name="id" />

        <label htmlFor="password">password : </label>
        <input type="password" name="password" />

        <button type="submit">Submit</button>
      </form>
      <div>
        <div>
          간편 로그인하기 <div>구글</div> <div>카카오톡</div>
        </div>
        <div>회원가입</div>
      </div>
    </div>
  );
}
