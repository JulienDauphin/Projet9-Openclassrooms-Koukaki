<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'koukakifinal' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '2tz(rW&{,`aN%@$2y&MNh*FbT}Lg}8zLb!PYm+fc ~ZRuMl83:U/K/kkcR,f]@TB' );
define( 'SECURE_AUTH_KEY',  'V_8R(ofN)Z=Z10N0,N^;[5`.hiG5jM=s++S%hw;~BfnQDOJwrK#vb{h3Vf.6Af_V' );
define( 'LOGGED_IN_KEY',    'V>pQB-!-)jD3<Mj#WL`Mz!Ft~wq0DRG|-Ka4h19etjga*qr4M$fgrj~M<;DvTq(+' );
define( 'NONCE_KEY',        'fe@K[peqc~^4:5j(yM^0mWw[ZH1}ocbmL*kq;.QSrr71D/I~Kdp*!zGeE]KJ*.$S' );
define( 'AUTH_SALT',        'Lw!Y#U$d%ax(4~k]}vJ]Oi]}H^|BvT:7DF=]w`XTo =NAGc%IN~3:c8G6#S9<UfR' );
define( 'SECURE_AUTH_SALT', 'XQrQz[SFez,jpj2e(F`Y[&|uHL=/QCS[}F9x@.#xof$ECuX~+I*?,b^pF8s(a99O' );
define( 'LOGGED_IN_SALT',   'DoX,MPNS{,Q:XkVKZ!1DSb}&z6BJ~yvd/@vV:>RJdhLU:2(VJ9MK-t7QO4b9b+t4' );
define( 'NONCE_SALT',       '4$|NyL{ [_YW1|p QT6z6HcGp]NbK(:ek;KJAOMN;Y:{tO#<sh.YC`-M%Pqec-zK' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
