import React from "react";
import { Wrapper } from "../../css/PageStyle";

const ConstellationModalContent = ({ constellationObj }) => {
	const {
		latin_name_nom_latin,
		english_name_nom_en_anglais,
		french_name_nom_francais,
		iau_code,
		image,
		principal_star_etoile_principale,
		season_saison,
		photo_description,
		name_origin_origine_de_l_apellation,
		quad_repere_de_l_hemisphere_et_du_quadrant,
		dec_declinaison,
		constellation_area_in_degrees_etendue_de_la_constellation_en_degres_2,
		constellation_area_in_of_the_celestial_sphere_etendue_de_la_constellation_en_de_la_sphere_celeste,
		constellation_zone_celestial_equator_zone_de_la_constellation_equateur_celeste,
		constellation_zone_ecliptic_zone_de_la_constellation_ecliptique,
		constellation_zone_milky_way_zone_de_la_constellation_voie_lactee,
	} = constellationObj;
	const { url } = image;

	return (
		<Wrapper>
			<article className="title">
				<div>{latin_name_nom_latin}</div>
			</article>
			<article className="grid-small grid-small-alt">
				<div className="img-container img-container-alt">
					<img src={url} alt="hubble-main" />
				</div>
				<div className="text-container">
					<div>
						<span className="subtitle">Description : </span>
						<span>{photo_description || "?"}</span>
					</div>
					<div>
						<span className="subtitle">english name : </span>
						<span>{english_name_nom_en_anglais || "?"}</span>
					</div>
					<div>
						<span className="subtitle">french name : </span>
						<span>{french_name_nom_francais || "?"}</span>
					</div>
					<div>
						<span className="subtitle">latin name : </span>
						<span>{latin_name_nom_latin || "?"}</span>
					</div>
					<div>
						<span className="subtitle">origin name : </span>
						<span>{name_origin_origine_de_l_apellation || "?"}</span>
					</div>
					<div>
						<span className="subtitle">iau code : </span>
						<span>{iau_code || "?"}</span>
					</div>
					<div>
						<span className="subtitle">principal star : </span>
						<span>{principal_star_etoile_principale || "?"}</span>
					</div>
					<div>
						<span className="subtitle">origin name : </span>
						<span>{name_origin_origine_de_l_apellation || "?"}</span>
					</div>
					<div>
						<span className="subtitle">quadrant : </span>
						<span>{quad_repere_de_l_hemisphere_et_du_quadrant || "?"}</span>
					</div>
					<div>
						<span className="subtitle">dec : </span> {dec_declinaison || "?"}
					</div>
					<div>
						<span className="subtitle">season : </span> {season_saison || "?"}
					</div>
					<div>
						<span className="subtitle">constellation area in degrees : </span>
						{constellation_area_in_degrees_etendue_de_la_constellation_en_degres_2 || "?"}
					</div>
					<div>
						<span className="subtitle">constellation area in of the celestial sphere : </span>
						{constellation_area_in_of_the_celestial_sphere_etendue_de_la_constellation_en_de_la_sphere_celeste || "?"}
					</div>
					<div>
						<span className="subtitle">constellation zone celestial equator : </span>
						{constellation_zone_celestial_equator_zone_de_la_constellation_equateur_celeste || "?"}
					</div>
					<div>
						<span className="subtitle">constellation zone ecliptic: </span>
						{constellation_zone_ecliptic_zone_de_la_constellation_ecliptique || "?"}
					</div>
					<div>
						<span className="subtitle">constellation zone milky way : </span>
						{constellation_zone_milky_way_zone_de_la_constellation_voie_lactee || "?"}
					</div>
				</div>
			</article>
		</Wrapper>
	);
};

export default ConstellationModalContent;
