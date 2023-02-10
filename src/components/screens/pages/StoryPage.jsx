import React from 'react'
import GallerySection from './story/GallerySection'
import IdendtAbout from './story/IdendtAbout'
import ShowCase from './story/ShowCase'
import StoryPageHero from './story/StoryPageHero'

function StoryPage() {
    return (
        <div>
			<StoryPageHero />
			<ShowCase />
			<IdendtAbout />
			<GallerySection />
        </div>
    )
}

export default StoryPage
