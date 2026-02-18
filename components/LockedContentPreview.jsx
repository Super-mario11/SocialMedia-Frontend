import PostTeaserCard from "./PostTeaserCard.jsx";
import SectionHeader from "./SectionHeader.jsx";

function LockedContentPreview({ posts, onOpen }) {
  return (
    <section id="preview" className="pt-8">
      <SectionHeader
        eyebrow="Locked Preview"
        title="Instagram-Style Premium Grid"
        subtitle="Tap any post to unlock full access."
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((item) => (
          <PostTeaserCard key={item.id} item={item} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

export default LockedContentPreview;
