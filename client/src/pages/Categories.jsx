export default function Categories({ selected, onChange }) {
    function handleCbClick(ev) {
        const { checked, name } = ev.target;
        if (checked) {
            onChange([...selected, name]);
        } else {
            onChange([...selected.filter((selectedName) => selectedName !== name)]);
        }
    }

    return (
        <>
            <label className="flex border rounded-2xl p-4 gap-2 items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="fruits"
                    checked={selected.includes("fruits")} // Check if "fruits" is in the selected categories
                    onChange={handleCbClick}
                />
                <span>Fruits</span>
            </label>
            <label className="flex border rounded-2xl p-4 gap-2 items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="vegetables"
                    checked={selected.includes("vegetables")} // Check if "vegetables" is in the selected categories
                    onChange={handleCbClick}
                />
                <span>Vegetables</span>
            </label>
        </>
    );
}
