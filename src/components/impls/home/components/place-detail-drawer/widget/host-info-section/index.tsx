import { Button, Typography } from '@mui/material';
import { Column, Flexible, Row } from '@xod/mui-layout';
import { ShieldOutline, Star } from '~/components/icons';
import IconText from '~/components/shared/icon-text';
import Image from '~/components/shared/image';
import Link from '~/components/shared/link';
import RichText from '~/components/shared/rich-text';
import { useActivePlace } from '../../provider';
import SuperHostTag from '../shared/superhost-tag';

function HostInfoSection() {
  const place = useActivePlace();
  const host = place.host;

  return (
    <Column gap={3}>
      <Typography variant="h6">Host</Typography>
      <Column gap={2}>
        <Row gap={2} crossAxisAlignment="center">
          <Image
            src={host.photo_url}
            alt={host.name}
            width={40}
            height={40}
            fit="cover"
            borderRadius="50%"
          />
          <Column>
            <Typography variant="body2" fontWeight={700}>
              Hosted by {host.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Joined in {host.joined_at}
            </Typography>
          </Column>
          <Flexible />
          <Button variant="outlined" color="inherit">
            Contact Host
          </Button>
        </Row>
        <Row gap={4} crossAxisAlignment="center">
          <IconText
            icon={<Star />}
            text={`${host.review_count} reviews`}
            textProps={{ variant: 'subtitle2' }}
          />
          <IconText
            icon={<ShieldOutline />}
            text={host.verified ? 'Identity Verified' : 'Unverified'}
            textProps={{ variant: 'subtitle2' }}
          />
          {host.is_superhost && <SuperHostTag />}
        </Row>
      </Column>
      <RichText content={host.about as any} />
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

export default HostInfoSection;
