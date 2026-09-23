export default function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <form>
        <label>Business Name: <input type="text" defaultValue="Tech Solutions" /></label><br/><br/>
        <label>Bank Account: <input type="text" defaultValue="XXXX-XXXX-1234" /></label><br/><br/>
        <label>KYC Status: <b>Verified</b></label><br/><br/>
        <button type="button">Save Settings</button>
      </form>
    </div>
  );
}
