

export default function StudentSearch() {
    return (
      <div className="mb-4 rounded-md w-full bg-zinc-100 p-4 md:p-6">
            <label htmlFor="student" className="mb-2 block text-sm font-medium">
              Input Student ID
            </label>
            <div className="relative">
              <input
              type='text'
              id='student'
              name='student'
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              placeholder="SCH-08-47531108"
              pattern="[a-zA-Z]*-[0-9]{2}-[0-9]{8}"
              />
            </div>
          </div>

    );
}