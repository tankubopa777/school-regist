import './Login.css';

function Login() {
  return (
    <div className="LoginBox">
      <h>ลงทะเบียนรายวิชาเลือก และวิชาชุมนุม</h>
      <form>
        <input type="text" for="username" placeholder='รหัสนักเรียน'></input>
        <input type="password" for="password" placeholder='รหัสผ่าน'></input>
        <button type="button">เข้าสู่ระบบ</button>
      </form>
    </div>
  );

}

export default Login;
