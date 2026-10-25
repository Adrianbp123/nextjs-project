import Link from "next/link";
import styles from "./Pagination.module.css";

type PaginationProps = {
    page: number;
    hasNext: boolean;
    hasPrevious: boolean;
    search?: string;
    genre?: string;
    ordering?: string;
};


/**
 * Viser navigasjon mellom sider med spill.
 * Beholder søk, sjanger og sortering ved sidebytte.
 * 
 * @param props Egenskaper for pagineringen
 * @returns Lenker til forrige og neste side.
 */

export default function Pagination({
    page,
    hasNext,
    hasPrevious,
    search,
    genre,
    ordering,
}: PaginationProps) {

    function getPageUrl(pageNumber: number) {
        const params = new URLSearchParams();

        if (search) params.set("search", search);
        if (genre) params.set("genre", genre);
        if (ordering) params.set("ordering", ordering);

        params.set("page", String(pageNumber));

        return `/games?${params.toString()}`;
    }

    return (
        <nav className={styles.pagination} aria-label="Sidenavigasjon">
            {hasPrevious && (
                <Link className={styles.pageLink} href={getPageUrl(page - 1)}>Forrige</Link>
            )}

            <span className={styles.pageNumber}>Side {page}</span>

            {hasNext && (
                <Link className={styles.pageLink} href={getPageUrl(page + 1)}>Neste</Link>
            )}
        </nav>
    )
}