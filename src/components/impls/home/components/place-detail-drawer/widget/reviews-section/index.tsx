import { LinearProgress, Typography } from '@mui/material';
import { Column, Grid, Row, Spacer } from '@xod/mui-layout';
import { Star } from '~/components/icons';
import { Place } from '~/components/impls/home/types';
import IconText from '~/components/shared/icon-text';
import Image from '~/components/shared/image';
import Link from '~/components/shared/link';
import nformat from '~/utils/nformat';
import { useActivePlace } from '../../provider';

function ReviewsSection() {
  const place = useActivePlace();
  const formattedRating = nformat(place.rating, { minimumFractionDigits: 1 });
  const stats = place.reviews.stats;

  return (
    <Column gap={3}>
      <Row
        gap={2}
        crossAxisAlignment="center"
        mainAxisAlignment="space-between"
      >
        <Typography variant="h6">Reviews</Typography>
        <IconText
          icon={<Star />}
          text={`${formattedRating} — ${place.reviews.count} reviews`}
          textProps={{ variant: 'subtitle2' }}
        />
      </Row>
      <Column
        gap={3}
        p={3}
        border="1px solid"
        borderColor="grey.300"
        borderRadius={4}
      >
        <ReviewStatItem label="Cleanliness" value={stats.cleanliness} />
        <ReviewStatItem label="Accuracy" value={stats.accuracy} />
        <ReviewStatItem label="Communication" value={stats.communication} />
        <ReviewStatItem label="Location" value={stats.location} />
        <ReviewStatItem label="Check-in" value={stats.check_in} />
        <ReviewStatItem label="Value" value={stats.value} />
      </Column>
      <Grid columnTemplate="1fr 1fr" spacing={1.5}>
        {place.reviews.entries.map((review) => (
          <ReviewListItem key={review.id} review={review} />
        ))}
      </Grid>
      <Link
        href="#"
        variant="body2"
        fontWeight={700}
        sx={{ alignSelf: 'start' }}
        mui
      >
        View more
      </Link>
    </Column>
  );
}

type ReviewStatItemProps = {
  label: string;
  value: number;
};

function ReviewStatItem({ label, value }: ReviewStatItemProps) {
  return (
    <Row crossAxisAlignment="center" gap={1}>
      <Typography variant="subtitle2" sx={{ width: '20ch', flexShrink: 0 }}>
        {label}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={(value / 5) * 100}
        sx={{ width: 1, height: 8, borderRadius: 2 }}
      />
      <Typography variant="subtitle2">
        {nformat(value, { minimumFractionDigits: 1 })}
      </Typography>
    </Row>
  );
}

type ReviewListItemProps = {
  review: Place['reviews']['entries'][number];
};

function ReviewListItem({ review }: ReviewListItemProps) {
  return (
    <Column p={3} border="1px solid" borderColor="grey.300" borderRadius={4}>
      <Row gap={2} crossAxisAlignment="center">
        <Image
          src={review.user.photo_url}
          alt={review.user.name}
          width={48}
          height={48}
          borderRadius="50%"
          fit="cover"
        />
        <Column gap={0.5}>
          <Typography variant="body2" fontWeight={700}>
            {review.user.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {review.created_at}
          </Typography>
        </Column>
      </Row>
      <Spacer sy={3} />
      <Typography variant="body2" color="text.secondary">
        {review.content}
      </Typography>
    </Column>
  );
}

export default ReviewsSection;
