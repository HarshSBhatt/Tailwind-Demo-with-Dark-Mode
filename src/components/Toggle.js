const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input type="checkbox" checked={checked} onChange={onChange} />
  </span>
);

export default Toggle;
