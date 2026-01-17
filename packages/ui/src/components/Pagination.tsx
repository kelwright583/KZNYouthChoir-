import React from 'react'
import { cn } from '../utils/cn'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showPageNumbers?: boolean
  maxPageNumbers?: number
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showPageNumbers = true,
  maxPageNumbers = 5,
}) => {
  const getPageNumbers = () => {
    if (!showPageNumbers) return []

    const pages: (number | string)[] = []
    const half = Math.floor(maxPageNumbers / 2)

    let start = Math.max(1, currentPage - half)
    let end = Math.min(totalPages, currentPage + half)

    if (end - start < maxPageNumbers - 1) {
      if (start === 1) {
        end = Math.min(totalPages, start + maxPageNumbers - 1)
      } else {
        start = Math.max(1, end - maxPageNumbers + 1)
      }
    }

    if (start > 1) {
      pages.push(1)
      if (start > 2) pages.push('...')
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push('...')
      pages.push(totalPages)
    }

    return pages
  }

  if (totalPages <= 1) return null

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          currentPage === 1
            ? 'text-neutral-400'
            : 'text-neutral-700 hover:bg-neutral-100'
        )}
        aria-label="Previous page"
      >
        Previous
      </button>

      {showPageNumbers && (
        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => {
            if (page === '...') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-3 py-2 text-sm text-neutral-500"
                >
                  ...
                </span>
              )
            }

            const pageNum = page as number
            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-lg transition-colors min-w-[40px]',
                  pageNum === currentPage
                    ? 'bg-primary-900 text-white'
                    : 'text-neutral-700 hover:bg-neutral-100'
                )}
                aria-label={`Page ${pageNum}`}
                aria-current={pageNum === currentPage ? 'page' : undefined}
              >
                {pageNum}
              </button>
            )
          })}
        </div>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          currentPage === totalPages
            ? 'text-neutral-400'
            : 'text-neutral-700 hover:bg-neutral-100'
        )}
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  )
}

