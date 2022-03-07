import React, {useEffect} from 'react';
import {Box, Paper, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {fetchPosts} from "../../redux/postsSlice";

type Props = {
  id: number
}

const PostList: React.FC<Props> = ({id}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts(id))
  }, [dispatch, id]);
  const {postList} = useAppSelector(state => state.posts)
  return(
    <Box>
      {postList?.map((post) => (
        <Paper
          key={post.id}
          elevation={6}
          sx={{
            padding: '0.5rem',
            marginBottom: '0.5rem'
          }}
        >
          <Typography component={'h2'} variant={'h4'}>{post.title}</Typography>
          <Typography paragraph={true}>{post.body}</Typography>
        </Paper>
      ))}
    </Box>
  )
}

export default PostList;