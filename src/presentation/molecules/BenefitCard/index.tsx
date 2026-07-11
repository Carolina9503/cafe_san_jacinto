import type { Benefit } from '@/domain/entities/Benefit'
import { Heading } from '@/presentation/atoms/Heading'
import { Text } from '@/presentation/atoms/Text'
import { IconLine } from '@/presentation/atoms/IconLine'

interface BenefitCardProps {
  benefit: Benefit
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl px-6 py-8 text-center transition-transform duration-300 ease-organic hover:-translate-y-1">
      <IconLine icon={benefit.icon} size={24} withCircle circleClassName="bg-organic-50 text-organic-600" />
      <Heading level={4}>{benefit.title}</Heading>
      <Text variant="secondary" className="text-sm">
        {benefit.description}
      </Text>
    </div>
  )
}
