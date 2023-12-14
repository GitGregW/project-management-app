export default function Toolbar() {
    return (
        <aside className="flex flex-col gap-8 bg-black mt-12 rounded-tr-2xl px-8 pt-14">
            <h1 className="text-xl font-bold text-white">YOUR PROJECTS</h1>
            <button className="text-stone-400 bg-stone-700 py-2 px-3 mr-auto rounded">+ Add Project</button>
            <ul className="space-y-2">
                <li className="py-1 px-3 text-stone-300 bg-stone-900">Example 1</li>
                <li className="py-1 px-3 text-stone-500">Example 2</li>
            </ul>
        </aside>
    );
}