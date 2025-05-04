<?php

namespace Drupal\div_generator\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "div_generator" plugin.
 *
 * NOTE: The plugin ID ('id' key) corresponds to the CKEditor plugin name.
 * It is the first argument of the CKEDITOR.plugins.add() function in the
 * plugin.js file.
 *
 * @CKEditorPlugin(
 *   id = "div_generator",
 *   label = @Translation("Div generator")
 * )
 */
class DivGeneratorButton extends CKEditorPluginBase {


  /**
   * {@inheritdoc}
   *
   * NOTE: The keys of the returned array corresponds to the CKEditor button
   * names. They are the first argument of the editor.ui.addButton() or
   * editor.ui.addRichCombo() functions in the plugin.js file.
   */
  public function getButtons() {
    // Make sure that the path to the image matches the file structure of
    // the CKEditor plugin you are implementing.
    return [
      'DivGenerator' => [
        'label' => t('Div generator'),
        'image' => 'modules/custom/div_generator/js/plugins/div_generator/images/div_generator.png',
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    // Make sure that the path to the plugin.js matches the file structure of
    // the CKEditor plugin you are implementing.
    return $this->getModulePath('div_generator') . '/js/plugins/div_generator/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function isInternal() {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getDependencies(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [];
  }

}
