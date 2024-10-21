import prisma from '@/libs/prisma'

const CommentBox = async ({ anime_mal_id }) => {
    const comments = await prisma.comment.findMany({ where: { anime_mal_id } });
    return (
        <div className='grid grid-cols-2 gap-4'>
            {comments.map(comment => {
                return (
                    <div
                        key={comment.id}
                        className='bg-color-primary mt-4 rounded p-4'>
                        <p className='font-bold text-lg'>{comment.username}</p>
                        <p className=''>{comment.comment}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentBox