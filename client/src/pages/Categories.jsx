export default function Categories({selected, onChange}) {
    return(
        <>
            <label className="flex border rounded-2xl p-4 gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <span>Fruits</span>
            </label>
            <label className="flex border rounded-2xl p-4 gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <span>Vegetables</span>
            </label>
        </>
    );
}