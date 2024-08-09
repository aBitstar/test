import "./App.css";

function App() {
  return (
    <>
      <div className="form-wrapper">
        <form className="form" action="">
          <div>
            <label htmlFor="name">First Name:</label>
            <input
              type="text"
              id="name"
              name="firstname"
              placeholder="John Jairo"
              required
            />
          </div>
          <div>
            <label htmlFor="name">Last Name:</label>
            <input
              type="text"
              id="name"
              name="lastname"
              placeholder="Virguez"
              required
            />
          </div>
          <div>
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              id="name"
              name="email"
              placeholder="kracht0@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="name">Address:</label>
            <input
              type="text"
              id="name"
              name="address"
              placeholder="Colombia"
              required
            />
          </div>
          <div>
            <label htmlFor="name">Phone:</label>
            <input
              type="number"
              id="name"
              name="phone"
              placeholder="+12012280220"
              required
            />
          </div>
          <div>
            <label htmlFor="name">Job Title:</label>
            <select id="name" name="title" required>
              <option value="" selected>
                Lead
              </option>
              <option value="">Mid</option>
              <option value="">Junior</option>
              <option value="">Frontend Focused</option>
              <option value="">Backend Focused</option>
              <option value="">Full Stack</option>
            </select>
          </div>
          <div>
            <label htmlFor="name">Reason:</label>
            <textarea
              id="name"
              name="name"
              placeholder="I am very much proficient in react and its associated libraries.

I can combine React and Tailwindcss to ensure robust and pixel-perfect design.

Furthermore, I am used to OpenAPI and @tanstack React query to ensure suitable state management and classified API call."
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
