<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
/**
 * Simple as this site, the only real PHP-level logic I need to implement is support for some custom fields via acf.
 */
class RKainTheme {
	function __construct() {
		add_action('init', [$this, 'defineResumeComponentPostType']);
	}
	/**
	 * The main issue at hand is how to present the resume components. I do this by defining a resume_component post type
	 * and then attaching custom fields to them as appropriate.
	 *
	 * @return void
	 */
	function defineResumeComponentPostType() {
		$labels = [];
		$args = [];
		register_post_type('resume_component', $args);
	}
	
}
new RKainTheme();