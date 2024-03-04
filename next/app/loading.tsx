const Loading = () => {
    return (
        <div className="flex justify-center items-center gap-6 mt-10">
            <div className="h-10 w-10 animate-spin border-[5px] border-sky-400 rounded-full  border-t-transparent"></div>
            <div className="text-[30px] font-weight">Loading</div>
        </div>
    )
}

export default Loading