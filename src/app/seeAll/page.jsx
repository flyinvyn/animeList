"use client"

import AnimeList from '@/components/AnimeList'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import { getAnimeResponse } from '@/libs/api-libs'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [page, setPage] = useState(1)
  const [anime, setAnime] = useState([])

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
    setAnime(populerAnime) 
  }

  useEffect(()=>{
    fetchData()
  },[page])

  return (
    <>
      <HeaderMenu title={`ALL ANIME #${page}`}/>
      <AnimeList api={anime} />
      <Pagination page={page} lastPage={anime.pagination?.last_visible_page} setPage={setPage} />
    </>
  )
}

export default Page